import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type AuthScreenStyles = {
  root: ViewStyle;
  inputContainer: ViewStyle;
  inputLabel: TextStyle;
  input: TextStyle;
  button: ViewStyle;
};

export const authScreenStyles = StyleSheet.create<AuthScreenStyles>({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
  },
  inputContainer: {
    width: '100%',
    paddingVertical: '20%',
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 28,
  },
  input: {
    borderBottomColor: '#e1e1e1',
    paddingTop: 10,
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF5F8',
    borderRadius: 30,
    fontWeight: '500',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '100%',
  },
});
