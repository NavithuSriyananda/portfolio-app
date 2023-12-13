'use client'

import Tilt from 'react-parallax-tilt'
import { faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons'
import Styles from './Avatar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Avatar() {
    return (
        <div className={`${Styles.tilt_wrapper}`}>
            <Tilt
                perspective={500}
                glareEnable={false}
                glareMaxOpacity={0.45}
                scale={1.02}
                gyroscope={true}
                className={`${Styles.tilt}`}>
                <div className={`${Styles.tilt_inner}`}>
                    <FontAwesomeIcon icon={faUser} className={`${Styles.user_icon}`} />
                    <div className={`${Styles.tilt_top_icon}`}>
                        <FontAwesomeIcon icon={faLaptopCode} className={`${Styles.laptop_icon}`}/>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}