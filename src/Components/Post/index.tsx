import {
  Container,
  UserImage,
  UserInfo,
  Texts,
  Paragrafo,
  PhotoPost,
  Reactions,
  ImagesReactions,
  Duo,
} from "./style";
import { View } from "react-native";

interface postProps {
  photo?: boolean;
  text: string;
}

export default function Post({ photo, text }: postProps) {
  return (
    <Container>
      <UserInfo>
        <UserImage profile source={require("../../../assets/fotao.png")} />
        <View>
          <Texts date>vamos para casa</Texts>
          <Texts>12/12/2002</Texts>
        </View>
      </UserInfo>
      <Paragrafo>{text}</Paragrafo>
      {photo && <PhotoPost source={require("../../../assets/fotoPost1.png")} />}
      <Reactions>
        <Duo>
          <ImagesReactions source={require("../../../assets/like.png")} />
          <Texts>24</Texts>
        </Duo>
        <Duo>
          <ImagesReactions source={require("../../../assets/coments.png")} />
          <Texts>86</Texts>
        </Duo>
        <Duo>
          <ImagesReactions
            source={require("../../../assets/compartilhar.png")}
          />
          <Texts>250</Texts>
        </Duo>
        <ImagesReactions source={require("../../../assets/pontos.png")} />
      </Reactions>
    </Container>
  );
}