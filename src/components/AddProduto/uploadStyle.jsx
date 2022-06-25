import styled from 'styled-components'
import { corContrasteEscuro, corPrimaria } from '../Ui/variaveis'

export const BoxUpload = styled.div`
    display: grid;
    place-items: center;
    border: 1px dashed ${corContrasteEscuro};
    /* padding: 36px 48px; */
    position: relative;
    height: 280px;
    width: 49%;
    background: #FBFBFF;
    border-radius: 20px;
    .image-upload {
        display: flex;
        flex-wrap:wrap;
        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }
        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */
    #uploaded-image{
        height: 280px;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;
        :hover {
            opacity: 1;
        }   
    }
`

export const LabelInputUpload = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ContainerFotosPequenas = styled.div`
    width: 49%;
    height: 280px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
`;

export const ContainerFotos = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const BoxUploadPequeno = styled.div`
    display: grid;
    place-items: center;
    border: 1px dashed ${corContrasteEscuro};
    /* padding: 36px 48px; */
    position: relative;
    height: 48%;
    width: 48%;
    background: #FBFBFF;
    border-radius: 10px;
    .image-upload {
        display: flex;
        flex-wrap:wrap;
        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }
        >input {
            display: none;
        }
    }
`;

export const ImagePreviewPequeno = styled.div`
    position: relative;
    /* cursor: pointer; */
    #uploaded-image{
        height: 130px;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;
        :hover {
            opacity: 1;
        }   
    }
`