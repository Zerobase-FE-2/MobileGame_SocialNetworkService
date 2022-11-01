import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';
// import { firestore } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, setDoc, addDoc, collection, getDoc } from "firebase/firestore"
import { firestore } from '../modules/firebase/app';

const CategoryBox = styled.div`
  max-width: 200px;
  min-width: 200px;
  max-height: 500px;
  min-height: 500px;
  text-align: left;
  border-radius: 7px;
  background-color: #ffffff;
  margin: 5px;
`;

const CategoryItem = styled.div`
  font-size: 20px;
  line-height: 40px;
  max-height: 40px;
  min-height: 40px;
  border-radius: 7px;
  margin: 5px 5px 5px 20px;
  cursor: pointer;
`;

const ContainerWrapper = styled.div`
  max-width: 500px;
  min-width: 500px;
  /* max-height: 1000px;
  min-height: 1000px; */
  border-radius: 7px;
  background-color: #FFFFFF;
  margin: 5px;
`;

const ContainerTop = styled.div`
  display: block;
  max-width: 490px;
  min-width: 490px;
  height: 35px;
  padding: 0 10px 0 0;
`;

const ButtonContainer = styled.div`
  
`;

const FilterButton = styled.button`
  max-width: 200px;
  float: right;
  min-width: 70px;
  height: 30px;
  border-radius: 7px;
  background-color: #69A5FF;
  margin: 5px 5px auto 5px;
  border: 0;
  border-radius: 7px 7px 0px 0px;
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 490px;
  min-width: 490px;
  /* max-height: 1000px;
  min-height: 1000px; */
  border-radius: 7px;
  background-color: #3284FF;
  position: relative;
  margin: 0 5px auto 5px;
`;

const ItemWrapper = styled.div`
  display: block;
  max-width: 480px;
  min-width: 480px;
  max-height: 100px;
  min-height: 100px;
  border-radius: 7px;
  background-color: #AADBFF;
  margin: 5px 5px auto;
`;

const ItemImageBox = styled.figure`
  display: block;
  float: left;
  width: 120px;
  height: 90px;
  background-color: #E9EBFF;
  margin: 0;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 7px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #E9EBFF;
  border-radius: 7px;
`;

const ItemInfoBox = styled.div`
  display: block;
  float: left;
  width: 300px;
  height: 90px;
  margin: 0;
  margin-left: 20px;
  
`;

const ItemInfo = styled.div`
  display: block;
  height: 20px;
  margin: 5px auto 0px 5px;
  text-align: left;
  font-size: medium;
`;

const CreatItemButton = styled.div`
  font-size: 20px;
  line-height: 40px;
  max-height: 40px;
  min-height: 40px;
  border-radius: 7px;
  margin: 5px 5px 5px 20px;
  cursor: pointer;
`

export default function ProductPage(props:any) {
  const {userUid} = props;
  // const productListApi = 'https://run.mocky.io/v3/3c8d01cf-810b-4471-8d45-62f8911aad8f';
  // async function fetcher(url:string){
  async function fetcher(){
    // const result = await axios.get(url);
    const docRef = doc(firestore, "bucket", "mobileGames");
    const docSnap = await getDoc(docRef);
    // console.log(result.data);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data().gameList;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    // return result.data;
  }
  const {data: docs, error} = useSWR('post', () => fetcher());

  async function adddata () {
    const frankDocRef = doc(firestore, "bucket", "mobileGames");
    const docSnap = await getDoc(frankDocRef);
    var aaasss;
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().asd);
      aaasss = docSnap.data().gameList;
      setDoc(frankDocRef, {gameList:[...aaasss, {id: 2, title: "히트2", uid:`${userUid}`}]}, { merge: true });
      console.log(aaasss);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    } 
  }
  
  
  if(error) return <div>failed to load</div>;
  if(!docs) return <div>Loading...</div>;

  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      {/* <button onClick={addArray}></button> */}
      <CategoryBox>
        <div style={{fontSize: "25px", lineHeight: "40px", maxHeight: "40px", minHeight: "40px", borderRadius: "7px", margin: "5px 5px 5px 5px"}}>카테고리</div>
        <CategoryItem>전체</CategoryItem>
        <CategoryItem>롤플레잉</CategoryItem>
        <CategoryItem>어드벤처</CategoryItem>
        <CategoryItem>캐주얼게임</CategoryItem>
        <CategoryItem>스포츠</CategoryItem>
        <CategoryItem><Link to={"/addproduct"}>등록하기</Link></CategoryItem>  
      </CategoryBox>
      <ContainerWrapper>
        <ContainerTop>
          {"전체"}
          <FilterButton>이름순</FilterButton>
          <FilterButton>평점순</FilterButton>
          <FilterButton>인기순</FilterButton>
        </ContainerTop>

        <ContainerBottom>
          {docs.map((doc:any) => (
            <ItemWrapper key={doc.id} >
                <ItemImageBox>
                  <ItemImage src={doc.image} alt={doc.title}/>
                </ItemImageBox>
                <ItemInfoBox>
                  <ItemInfo>제목: {doc.title}</ItemInfo>
                  <ItemInfo>회사: {doc.company}</ItemInfo>
                  <ItemInfo>장르: {doc.category}</ItemInfo>
                  <ItemInfo>평점: {doc.id}</ItemInfo>
                </ItemInfoBox>
            </ItemWrapper>
          ))}
        </ContainerBottom>
      </ContainerWrapper>
    </div>
  )
}
