import React from "react";
import type { GridItemOwnProps, PolymorphicWithRef } from "../types";
import { GridItemBase } from "../base-components";

type GridItemProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  GridItemOwnProps
>;
type GridItemElement = <E extends React.ElementType>(
  props: GridItemProps<E>
) => React.ReactElement<GridItemProps<E>>;

/**
 * **A GridItem is a Child Element of a Grid Component.** \
 *  By default a GridItem is span to 12 Columns on all screen size.
 */
const GridItem: GridItemElement = React.forwardRef(
  <T extends React.ElementType>(
    props: GridItemProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <GridItemBase as={component} ref={innerRef} {...rest} />;
  }
);
export default GridItem;
