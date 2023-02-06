import React, { ReactElement } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { genericStyles } from '../../LayoutConfig';
import { ListItemWithAction } from '../../Types';

export function renderListItem<AArg>(
  item: ListItemWithAction<AArg>,
  e?: AArg,
  additionalStyling?: any
): ReactElement {
  additionalStyling = additionalStyling || {};
  return (
    <TouchableOpacity onPress={() => item.action?.(e)}>
      {item.action ? (
        <View style={[genericStyles.listItem, genericStyles.flexColumn, additionalStyling]}>
          <Text style={[genericStyles.mainText, additionalStyling]}>{item.title}</Text>
          <Text style={[genericStyles.subText, additionalStyling]}>
            {item.description || 'No description'}
          </Text>
        </View>
      ) : (
        <View style={genericStyles.paddedContainer}>
          <Text style={[genericStyles.listItemSectionTitle, additionalStyling]}>{item.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
