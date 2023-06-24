import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuItemProps, MenuList, MenuListProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { boxShadow } from '@/styles/theme/foundations/boxShadow';
import { colors } from '@/styles/theme/foundations/colors';
import { textStyles } from '@/styles/theme/foundations/textStyles';

const ActionList = ({ children }: PropsWithChildren) => <Menu>{children}</Menu>;

const Button = ({ children, ...props }: PropsWithChildren & MenuButtonProps) => (
  <MenuButton {...props}>{children}</MenuButton>
);

const ItemWrapper = ({ children, ...props }: PropsWithChildren & MenuListProps) => (
  <MenuList
    maxWidth={'200px'}
    paddingY={'18px'}
    borderWidth={0}
    borderRadius={'8px'}
    boxShadow={boxShadow.list}
    {...props}>
    {children}
  </MenuList>
);

const Item = ({ children, ...props }: PropsWithChildren & MenuItemProps) => (
  <MenuItem
    css={textStyles.b1}
    paddingX={'14px'}
    paddingY={'12px'}
    color={colors.main}
    _hover={{ backgroundColor: colors.gray[50] }}
    {...props}>
    {children}
  </MenuItem>
);

ActionList.Button = Button;
ActionList.ItemWrapper = ItemWrapper;
ActionList.Item = Item;

export default ActionList;
