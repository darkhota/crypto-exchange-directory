import styled from "styled-components";

export const StyledDetails = styled.div`
padding: 2rem;
display: flex;
align-items:; center;
justify-content: center;
flex-direction: column;

.header{
    display: flex;
    align-items: center;
    justify-content: center;
}

.header h2{
    font-size: 16px;
}

.header img{
    width: 35px;
    object-fit: cover;
}

.content{
    margin: 2rem;
    border-top: 1px solid;;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
}

.flex-group{
    display: flex;
    margin: 1rem;
    align-self: flex-start;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}
.flex-group h3{
    margin: 1rem;
    width: -webkit-fill-available;
    font-size:14px
    
}

.back {
    position: relative;
    top: 2.1rem;
    left: 0.1rem;
    width: fit-content;
}

.back img{
    width: 40px;
}

@media (min-width: 768px) {

    .header h2{
        font-size: 24px;
    }
    .header img{
        width: 55px;
        object-fit: cover;
    }
    .flex-group h3{
        font-size: 24px;
    } 
    .back {
        position: relative;
        top: 3rem;
        left: 4rem;
    }
    
    .back img{
        width: 60px;
    }
}
`;
