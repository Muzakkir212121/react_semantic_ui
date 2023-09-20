import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Container, Divider, Flag, Header, Image, Icon, Input, Label } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Container textAlign="left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including.
      </Container>
      <br />
      <Container textAlign="right">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including.
      </Container>
      <br />
      <Container textAlign="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including.
      </Container>
      <br />
      <Container textAlign="justified">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including.
      </Container>
      <Divider horizontal>Batas</Divider>
      <br />
      <Grid container columns={3}>
        <Grid.Column>
          <Button primary>Tombol Pertama</Button>
          <Button secondary>Tombol Kedua</Button> {/* Mengubah teks "Tombol Pertama" menjadi "Tombol Kedua" */}
          <Button basic color="red">
            Tombol Ketiga {/* Mengubah teks "Tombol Pertama" menjadi "Tombol Ketiga" */}
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Flag name="id" />
          <Flag name="india" />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" color="red">
            <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
            Andra Darmawan
          </Header>
        </Grid.Column>
      </Grid>

      <Container textAlign="center">
        <Icon name="spinner" size="big" loading />
      </Container>

      <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" size="tiny" href="http://google.com" target="_blank" />
      <Input type="text" placeholder="Search" icon={<Icon name="search" />} />
      <Label pointing="right">Mesin Pencarian Google</Label>
    </div>
  );
}

export default App;
