import 'react-native-gesture-handler';
import { MainPage } from './screens/MainPage';
import * as Sentry from 'sentry-expo'

Sentry.init({
  dsn: "https://3731fc6ac1f5477ab4253258dfb4dcd9@o1093126.ingest.sentry.io/6127827",
  enableInExpoDevelopment: true,
  debug: true
})

export default function App() {
  return (
      <MainPage />
  );
}
