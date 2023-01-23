import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type UserCardStyles = {
  root: ViewStyle;
  container: ViewStyle;
  label: TextStyle;
  title: TextStyle;
};
export const userCardStyles = StyleSheet.create<UserCardStyles>({
  root: {
    backgroundColor: '#FFF5F8',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 28,
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    width: '70%',
  },
});
