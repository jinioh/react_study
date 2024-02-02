import React, {memo, useState} from 'react'

type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const {isFizz} = props
    console.log(`다시 그려짐 isFizz = ${isFizz}`)
    return <span>{isFizz? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props
    console.log('buzz 다시 그려짐')
    return (
        <span>
            {isBuzz? 'Buzz' : ''}
        </span>
    )
})