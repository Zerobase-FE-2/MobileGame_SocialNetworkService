import React ,{useState} from 'react'
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../modules/firebase/app';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 728px;
  /* height: 700px; */
  background-color: #8a7d7d;
`;
const NameTag = styled.div`
  padding-left: 10px;
  margin: 10px auto 5px 10px;
  width: 290px;
  height: 25px;
  text-align: left;
  line-height: 25px;
  background-color: #3a3acf;
`;
//uploadform
const UploadFormTop = styled.div`
  margin: 7px 7px auto;
  width: auto;
  height: 300px;
  background-color: #daa940;
`;

const ImgBox = styled.img`
  width: 700px;
  height: 230px;
`;

const UploadFormBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7px 7px;
  width: auto;
  /* height: 300px; */
  background-color: #ff4800;
`;
const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
const InputData = styled.textarea`
  border: 0;
  padding: 0;
  margin: 5px auto 5px 10px;
  width: 300px;
  height: 30px;
  text-align: left;
  line-height: 30px;
  background-color: #807878;
`;

const CreatItemButton = styled.button`
  font-size: 20px;
  line-height: 40px;
  max-height: 40px;
  min-height: 40px;
  border-radius: 7px;
  margin: 5px 5px 5px 20px;
  cursor: pointer;
`
export default function ProductDetail() {
  const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function loaditem () {
    const docRef = doc(firestore, "bucket", "mobileGames");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setImageUrl(docSnap.data().gameList[29].image);
      setTitle(docSnap.data().gameList[29].title);
      setDescription(docSnap.data().gameList[29].description);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  loaditem();

  return (
    <Container>
      <ImgBox src={imageUrl ? imageUrl : "/img/profile.png"}></ImgBox>
      <UploadFormTop>
      <TopLeft>
          <NameTag>제목</NameTag>
          <p>{title}</p>
          <NameTag>회사</NameTag>
          
          <NameTag>장르</NameTag>
        </TopLeft>
        <TopRight>
          <NameTag>상세정보</NameTag>
          <p>{description}</p>
        </TopRight>
      </UploadFormTop>
      
      <UploadFormBottom>
        
      </UploadFormBottom>
    </Container>
  )
}
