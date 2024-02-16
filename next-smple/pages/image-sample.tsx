import { NextPage } from 'next'
import Image from 'next/image'
import BibleImage from '../public/images/bible.jpeg'

const ImageSample: NextPage<void> = (props) => {
    return(
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img 태그로 표시</p>
            <img src='/images/bible.jpeg'/>
            <p>Image 컴포넌트로 표시</p>
            <Image src={BibleImage} alt={''} />
            <p>Image로 표시한 경우 사전에 그리기 영역이 확보됨</p>
        </div>
    )
}

export default ImageSample