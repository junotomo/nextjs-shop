import { styled } from "@stitches/react"

export const SuccessContainer = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height:656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100'
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
    },

    strong: {
        margin: '0 0.25rem',
    },

    a: {
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '$lg',
        textDecoration: 'none',
        marginTop: '4rem',
    }

})

export const ImageContainer = styled('div',{
    width: '100%',
    maxWidth: 130,
    height: 145,
   
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
    marginTop: '4rem',

    a: {
        display: 'block',
        textDecoration: 'none',
        fontSize: '$lg',
        color: '$green500',
        marginTop: '5rem',
        fontWeight: 'bold',

        '&:hover':{
            color: '$green300'
        }
    },

    img: {
        borderRadius: 99,
        objectFit: 'cover',
        padding: '1rem',
        background: 'linear-gradient(188deg, #1EA483 0%, #7465D4 100%)',
        '&:not(:first-of-type)': {
            marginLeft: '-40%',
            boxShadow: '1px 2px 16px 4px rgba(0, 0, 0, 0.3)',
        }
    }
})