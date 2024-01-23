import { Title, Paragraph } from "./Home.styled";

export const Home = () => {
    return(
        <>
        <Title>Car Rental</Title>
        <Paragraph>On this site, you can rent cars of various classes, which you want to choose</Paragraph>
        <img
        width={1440} 
        height={900}
        src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/og.jpg"
        alt="rent"
        />
        </>
    );
};