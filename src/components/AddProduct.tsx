import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { firestore } from '../modules/firebase/app';

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
const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
const InputData = styled.input`
  border: 0;
  padding: 0;
  margin: 5px auto 5px 10px;
  width: 300px;
  height: 30px;
  text-align: left;
  line-height: 30px;
  background-color: #807878;
`;
const InputDataSelect = styled.select`
  border: 0;
  padding: 0;
  margin: 5px auto 5px 10px;
  width: 300px;
  height: 30px;
  text-align: left;
  line-height: 30px;
  background-color: #807878;
`;
const InputDataDescription = styled.textarea`
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

export default function AddProduct() {

  const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const imgRef:any = useRef();
    console.log(imgRef)
  const onChangeImage = () => {
    const reader:any = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);
    console.log(reader);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e:any) => {
    imgRef.current.click();
    console.log(e)
  };

  async function adddata () {
    const frankDocRef = doc(firestore, "bucket", "mobileGames");
    const docSnap = await getDoc(frankDocRef);
    var aaasss;
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().asd);
      aaasss = docSnap.data().gameList;
      setDoc(frankDocRef, {gameList:[...aaasss, {id: `${aaasss.length + 1}`, title: `${title}`, company: `${company}`, category: `${genre}`, description: `${description}`, image: `${imageUrl}`, screenshot: { 0: "60-h1440-rw", 1: "w2560-h1440-rw", 2: "g=w2560-h1440-rw" }, rating: { score: 3.7, visit: 0 }}]}, { merge: true });
      console.log(aaasss);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    // To update age and favorite color:
    
  }

  return (
    <Container>
      <UploadFormTop>
        <NameTag>대표이미지</NameTag>
      <ImgBox src={imageUrl ? imageUrl : "/img/profile.png"}></ImgBox>
      <input
        type="file"
        ref={imgRef}
        onChange={onChangeImage}
        style={{ display: "none" }}
      ></input>
      <button
        onClick={(e) => {
          onClickFileBtn(e);
        }}
      >
        이미지 업로드
      </button>
      </UploadFormTop>
      
      <UploadFormBottom>
        <BottomLeft>
          <NameTag>제목</NameTag>
          <InputData style={{}} onChange={(e)=>{setTitle(e.target.value)}}/>
          <NameTag>회사</NameTag>
          <InputData style={{}} onChange={(e)=>{setCompany(e.target.value)}}/>
          <NameTag>장르</NameTag>
          <InputDataSelect style={{}} onChange={(e)=>{setGenre(e.target.value)}}>
            <option value="롤플레잉">롤플레잉</option>
            <option value="액션">액션</option>
            <option value="어드벤처">어드벤처</option>
          </InputDataSelect>
        </BottomLeft>
        <BottomRight>
          <NameTag>상세정보</NameTag>
          <InputDataDescription style={{minHeight: "200px", wordBreak:"break-word"}} onChange={(e)=>{setDescription(e.target.value)}}/>
        </BottomRight>
      </UploadFormBottom>

      <CreatItemButton onClick={adddata}>등록하기</CreatItemButton>
    </Container>
  )
}
