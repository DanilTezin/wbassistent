import React from 'react';
import Styles from './UploadFile.module.css';
import upload from '../../../../images/icons/upload.png'
import del from '../../../../images/icons/cross.svg'
export const UploadFile = ({ files, setFiles, token, newFiles, setNewFiles }) => {
    const formData = new FormData()
    const handleDel = (i) => {
        setFiles([...files.slice(0, i), ...files.slice(i + 1)])
    }
    const handleDel_ = (i) => {
        setNewFiles([...newFiles.slice(0, i), ...newFiles.slice(i + 1)])
    }
    const filez = (e) => {
        for (const file of e.target.files) {
            formData.append("files", file);
        }
        fetch(`${process.env.REACT_APP_BASE_API_URL}/api/upload/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        }).then(res => res.json()).then(res => setNewFiles([...newFiles, ...res.urls]))
    }
    return (
        <div className={Styles.uploadFile} >
            <div className={Styles.photoFilePreview}>
                {
                    files &&
                    files.map((x, i) => (
                        <div>
                            <img src={x} />
                            <button onClick={() => handleDel(i)}><img src={del} /></button>
                        </div>

                    ))}
                {
                    newFiles &&
                    newFiles.map((x, i) => (
                        <div>
                            <img src={x} />
                            <button onClick={() => handleDel_(i)}><img src={del} /></button>
                        </div>

                    ))}
            </div>
            <div className={Styles.uploadFile}>
                <label>Добавить фото
                    <input onChange={filez} id='file' className={Styles.inputFile} type="file" multiple />
                    <img src={upload} />
                </label>
            </div>
        </div>
    )
}