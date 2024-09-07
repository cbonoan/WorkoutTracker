import { Text } from '@/components/Text';
import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../ctx';

export default function AppLayout() {
  const { session, user, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }}/>
    </Stack>
  );
}
