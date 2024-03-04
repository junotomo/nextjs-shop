import { styled } from "@stitches/react";

export const HomeContainer = styled('main',{
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
})

export const ProdductContainer = styled('div',{
    display: 'flex',
    background: 'linear-gradient(188deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    img : {
        objectFit: 'cover',
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }

    },
    footer:{
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0, 0.6)',
        
        transform: 'translateY(110%)',

        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.125rem',
        },

        strong: {
            fontSize: '$lg',
            color: '$white'
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        },

        button: {
            background: '$green500',
            borderRadius: 6,
            padding: '0.75rem',
            border: 'none',
            cursor:'pointer',
            svg : {
                color: '$white'
            }
        }
    }
})