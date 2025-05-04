import { Stack, Text, PrimaryButton } from '@fluentui/react';

const Home = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" styles={{ root: { height: '100vh', padding: 20 } }}>
      <Text variant="xxLarge">Willkommen beim Lieferservice</Text>
      <Text variant="mediumPlus" styles={{ root: { marginTop: 10 } }}>
        Einfach. Schnell. Zuverlässig.
      </Text>
      <PrimaryButton text="Jetzt Bestellen" styles={{ root: { marginTop: 20 } }} />
    </Stack>
  );
};

export default Home;
