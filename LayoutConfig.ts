import { Colors } from 'react-native/Libraries/NewAppScreen';

export const genericStyles = {
  container: { flex: 1 },
  paddedContainer: {
    padding: 10,
  },
  noFlexShrink: {},
  textInput: {
    flex: 1,
    flexShrink: 0,
    borderColor: '#cccccc55',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 8,
    paddingRight: 8,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  listItemSectionTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#cccccc55',
  },
  mainText: {
    fontSize: 14,
    opacity: 1,
  },
  subText: {
    fontSize: 10,
    opacity: 0.4,
  },
};

export function getBackgroundStyle(isDarkMode: boolean): Record<string, string> {
  return {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? '#fff' : '#000',
  };
}
