import {
  Card,
  TableBody,
  TableCell,
  TableFooter,
  TableRow
} from "@material-ui/core";
import Checkbox from "@saleor/components/Checkbox";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import TableCellHeader from "@saleor/components/TableCellHeader";
import TableHead from "@saleor/components/TableHead";
import TablePagination from "@saleor/components/TablePagination";
import { PageFragmentFragment } from "@saleor/graphql";
import { makeStyles, Pill } from "@saleor/macaw-ui";
import { maybe, renderCollection } from "@saleor/misc";
import { PageListUrlSortField } from "@saleor/pages/urls";
import { ListActions, ListProps, SortPage } from "@saleor/types";
import { getArrowDirection } from "@saleor/utils/sort";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface PageListProps
  extends ListProps,
    ListActions,
    SortPage<PageListUrlSortField> {
  pages: PageFragmentFragment[];
}

const useStyles = makeStyles(
  theme => ({
    [theme.breakpoints.up("lg")]: {
      colSlug: {
        width: 250
      },
      colTitle: {},
      colVisibility: {
        width: 200
      }
    },
    colSlug: {},
    colTitle: {
      paddingLeft: 0
    },
    colVisibility: {},
    link: {
      cursor: "pointer"
    }
  }),
  { name: "PageList" }
);

const numberOfColumns = 4;

const PageList: React.FC<PageListProps> = props => {
  const {
    settings,
    pages,
    disabled,
    onNextPage,
    pageInfo,
    onRowClick,
    onSort,
    onUpdateListSettings,
    onPreviousPage,
    isChecked,
    selected,
    sort,
    toggle,
    toggleAll,
    toolbar
  } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  return (
    <Card>
      <ResponsiveTable>
        <TableHead
          colSpan={numberOfColumns}
          selected={selected}
          disabled={disabled}
          items={pages}
          toggleAll={toggleAll}
          toolbar={toolbar}
        >
          <TableCellHeader
            direction={
              sort.sort === PageListUrlSortField.title
                ? getArrowDirection(sort.asc)
                : undefined
            }
            arrowPosition="right"
            onClick={() => onSort(PageListUrlSortField.title)}
            className={classes.colTitle}
          >
            <FormattedMessage
              defaultMessage="Title"
              description="dialog header"
            />
          </TableCellHeader>
          <TableCellHeader
            direction={
              sort.sort === PageListUrlSortField.slug
                ? getArrowDirection(sort.asc)
                : undefined
            }
            arrowPosition="right"
            onClick={() => onSort(PageListUrlSortField.slug)}
            className={classes.colSlug}
          >
            <FormattedMessage
              defaultMessage="Slug"
              description="page internal name"
            />
          </TableCellHeader>
          <TableCellHeader
            direction={
              sort.sort === PageListUrlSortField.visible
                ? getArrowDirection(sort.asc)
                : undefined
            }
            arrowPosition="right"
            onClick={() => onSort(PageListUrlSortField.visible)}
            className={classes.colVisibility}
          >
            <FormattedMessage
              defaultMessage="Visibility"
              description="page status"
            />
          </TableCellHeader>
        </TableHead>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={numberOfColumns}
              settings={settings}
              hasNextPage={pageInfo && !disabled ? pageInfo.hasNextPage : false}
              onNextPage={onNextPage}
              onUpdateListSettings={onUpdateListSettings}
              hasPreviousPage={
                pageInfo && !disabled ? pageInfo.hasPreviousPage : false
              }
              onPreviousPage={onPreviousPage}
            />
          </TableRow>
        </TableFooter>
        <TableBody>
          {renderCollection(
            pages,
            page => {
              const isSelected = page ? isChecked(page.id) : false;

              return (
                <TableRow
                  hover={!!page}
                  className={!!page ? classes.link : undefined}
                  onClick={page ? onRowClick(page.id) : undefined}
                  key={page ? page.id : "skeleton"}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      disabled={disabled}
                      disableClickPropagation
                      onChange={() => toggle(page.id)}
                    />
                  </TableCell>
                  <TableCell className={classes.colTitle}>
                    {maybe<React.ReactNode>(() => page.title, <Skeleton />)}
                  </TableCell>
                  <TableCell className={classes.colSlug}>
                    {maybe<React.ReactNode>(() => page.slug, <Skeleton />)}
                  </TableCell>
                  <TableCell className={classes.colVisibility}>
                    {maybe<React.ReactNode>(
                      () => (
                        <Pill
                          label={
                            page.isPublished
                              ? intl.formatMessage({
                                  defaultMessage: "Published",
                                  description: "page status"
                                })
                              : intl.formatMessage({
                                  defaultMessage: "Not Published",
                                  description: "page status"
                                })
                          }
                          color={page.isPublished ? "success" : "error"}
                        />
                      ),
                      <Skeleton />
                    )}
                  </TableCell>
                </TableRow>
              );
            },
            () => (
              <TableRow>
                <TableCell colSpan={numberOfColumns}>
                  <FormattedMessage defaultMessage="No pages found" />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};
PageList.displayName = "PageList";
export default PageList;
