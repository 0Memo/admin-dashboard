import { Avatar as AntdAvatar, AvatarProps } from 'antd';
import { getNameInitials } from '../utilities/get-name-initials';

type Props = AvatarProps & {
    name?: string;
}

const CustomAvatar = ({ name, style, ...rest }: Props ) => {
    return (
        <AntdAvatar
            alt={ name }
            size='large'
            style={{
                backgroundColor: '#280236',
                margin: '15px',
                // padding: '22px',
                fontSize: '18px',
                height: '50px',
                width: '50px',
                fontWeight: '600',
                letterSpacing: '1px',
                color: '#e3e3e3',
                display: 'flex',
                alignItems: 'center',
                border: 'none',
                ...style
            }}
            { ...rest }
        >
            { getNameInitials(name || '' ) }
        </AntdAvatar>
    )
}

export default CustomAvatar