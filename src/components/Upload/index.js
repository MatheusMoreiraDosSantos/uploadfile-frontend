import React, {Component} from 'react';

import { DropContainer, UploadMessage } from './styles';

import Dropzone from 'react-dropzone';

function renderDragMessage(isDragActive, isDragReject){
    if(!isDragActive){
        return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }
    if(isDragReject){
        return <UploadMessage type='error' >Arquivo não suportado :(</UploadMessage>
    }
    return <UploadMessage type='success' >Solte os arquivos </UploadMessage>
}

class Upload extends Component {

  render(){

    const  {onUpload} = this.props;
    return (
      <Dropzone accept='image/*' onDropAccepted={onUpload} >
        {({getRootProps, getInputProps, isDragActive, isDragReject})=>(
            <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
          )}
      </Dropzone>
    )
  }
}

export default Upload;