import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-image: url("../../assets/brooke-lark-GTMGG-xvxdU-unsplash.jpg");
  background-size: cover; /* Resmin tüm alanı kaplaması için */
  background-position: center;
  min-height: calc(100vh - 75px);

  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 50px;
  /* background-color: pink; */
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    justify-content: center;

    border: 1px solid green;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  background-color: #A2C15A;

  
  padding: 10px;
  border-radius: 10px;
  margin: 2rem;

  &:hover {
    background-color: darkgreen; /* Hover sırasında arka plan rengini değiştirme */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Gölgeleme efekti */
    cursor: pointer;


  }
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  /* background-color: darkgray; */

  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1.4rem;
  margin: 2rem;
  background-color:  #A2C15A;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  background-color: #A2C15A;
  border-radius: 20px;
  width: 400px;
  padding: 1rem;
  text-align: left;
  font-size: 1.4rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* span{display:block; margin :1rem} */
`;
