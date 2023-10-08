import { css } from '@emotion/react'

export const wrapperStyle = () => css({
    display: "flex",
    margin: "16px auto",
    flexWrap: 'wrap',
    maxWidth: "1080px",
    '.Alert': {
        width: '100%'
    }
});

export const searchStyle = () => css({
    display: "flex",
    width: '100%',
    margin: "16px auto",
    gap: '16px',
    '.Input': {
        width: 'calc(90% - 16px)'
    },
    '.Button': {
        width: '10%'
    },
});

export const resultStyle = () => css({
    display: "flex",
    width: '100%',
    '.Item': {
        marginTop: '32px',
        border: '1px solid #dedede',
        width: '100%',
        padding: '16px',
        display: 'flex',
        gap: '8px', 
        img: {
            width: '48px',
            height: '48px'
        },
        '.TextContainer': {
            borderLeft: '1px solid #dedede',
            paddingLeft: '8px'
        },
        '.Title': {
            fontSize: '24px',
            margin: 0,
            lineHeight: '24px'
        },
        '.Description': {
            fontSize: '16px',
            margin: '8px 0px 0px'
        }
    } 
});