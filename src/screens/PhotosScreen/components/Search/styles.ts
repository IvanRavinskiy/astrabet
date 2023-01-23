import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type SearchStyles = {
  root: ViewStyle;
  label: TextStyle;
  title: TextStyle;
};
export const searchStyles = StyleSheet.create<SearchStyles>({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF5F8',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 28,
    paddingEnd: '5%',
  },
  title: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: 100,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
  },
});
