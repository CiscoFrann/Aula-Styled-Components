import { View, Text } from "react-native";
import { Container, Header, HeaderPhoto } from "./style";
import Post from "../Components/Post";

export default function Home() {
  return (
    <Container>
      <Header>
        <HeaderPhoto profile source={require("../../assets/fotao.png")} />
        <HeaderPhoto source={require("../../assets/logo.png")} />
        <HeaderPhoto source={require("../../assets/lupa.png")} />
      </Header>

      <Post
        photo
        text="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page"
      />
      <Post
        text="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum "
      />
      <Post
        text="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum "
      />

      <Text>Vamo la.</Text>
    </Container>
  );
}
