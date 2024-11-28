/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar as AntdAvatar, AvatarProps } from 'antd';

type Props = AvatarProps & {
    name: string;
}

const CustomAvatar = ({ name, style, ...rest }: Props ) => {
    return (
        <AntdAvatar
            alt={ 'Guillermo' }
            size='large'
            style={{
                backgroundColor: '#280236',
                margin: '15px',
                padding: '22px',
                fontSize: '18px',
                fontWeight: '600',
                letterSpacing: '1px',
                color: '#e3e3e3',
                display: 'flex',
                alignItems: 'center',
                border: 'none'
            }}
        >
            { name }
        </AntdAvatar>
    )
}

export default CustomAvatar