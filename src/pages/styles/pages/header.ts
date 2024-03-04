import { keyframes, styled } from "@stitches/react"

export const HeaderContainer = styled('header',{
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',

})

export const CartButton = styled('button', {
    padding: '0.75rem',
    background: '$gray800',
    position: 'relative',
    border: 'none',
    borderRadius: 8,

    svg: {
        color: '$gray600'
    },

    span: {
        background: '$green500',
        borderRadius: 99,
        padding: '0.25rem 0.5rem',
        position: 'absolute',
        fontSize: '$sm',
        color: '$white', 
        right:'-0.75rem',
        top: '-0.75rem',
    }
    
})
const slide = keyframes({
    'from': {
        right: -480,
    },
    'to': { 
        right: 0,
    },
  });

export const  CartContainer = styled('aside', {
    position: 'fixed',
    background: '$gray800',
    top: 0,
    width: 480,
    height:'100%',
    zIndex: 99,
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',

    animation: `${slide}`,
    animationDuration: '1s',
    animationFillMode: 'forwards',

})



export const CartHeader = styled('div', {
    display: 'flex',
    gap: '1.5rem',
    flexDirection: 'column',

    button: {
        background: 'transparent',
        border: 'none',
        width: 'fit-content',
        marginLeft: 'auto',
        cursor: 'pointer',
    },

    h1: {
        fontSize: '$xl',
        color: '$gray300',
        padding: '0 1.5rem',
    },

    svg: {
        color: '$gray300'
    }
})

export const CartItemList = styled('div', {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
})

export const CartItem = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.25rem',
    
    img: {
        background: 'linear-gradient(188deg, #1EA483 0%, #7465D4 100%)',
        borderRadius: 8,
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,

        span: {
            fontSize: '$md',
            color: '$gray300',
        },

        h1:{
            color: '$gray100',
        },

        button: {
            background: 'transparent',
            color: '$green500',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginRight: 'auto',
            cursor: 'pointer',
            '&:hover': {
                color: '$green300',
            }
        }
    }
})

export const CartFooter = styled('div', {
    padding: '1.5rem',
    marginTop: 'auto',

    button: {
        background:'$green500',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        width: '100%',
        fontWeight: 'bold',
        marginTop: '3.5rem',
        color: '$white',
        fontSize: '$md',
        '&:hover': {
            background:'$green300',
        }
    },

    div: {
        display: 'flex',
        justifyContent: 'space-between',

        span: {
            fontSize: '1rem',
            color: '$gray300',
            '&:nth-of-type(2)':{
                fontSize: '$md',
            }
        },

        '&:nth-of-type(2)': {
            span:{
                color:'$gray100',
                fontSize: '$lg',
                '&:nth-of-type(2)': {
                    fontSize: '$xl',
                }
            }
        },
    }
})