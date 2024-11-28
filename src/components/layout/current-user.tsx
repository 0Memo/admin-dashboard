import { Popover, Button, Spin } from 'antd'
import { useState } from 'react'
import CustomAvatar from '../custom-avatar';
import { useGetIdentity } from '@refinedev/core';
import type { User } from "../../generated/graphql/schema.types";
import { Text } from '../text';
import { SettingOutlined } from '@ant-design/icons';
import { AccountSettings } from './account-settings';
import MyAvatar from '../../assets/avatar.jpg' ;

const CurrentUser = () => {
    const [ isOpen, setIsOpen ]= useState(false);

    const { data: user, isLoading, error } = useGetIdentity<User>();

    const content = (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Text
                strong
                style={{ padding: '12px 20px' }}
            >
                { user?.name }
            </Text>
            <div
                style={{
                    borderTop: '1px solid #d9d9d9',
                    padding: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}
            >
                <Button
                    style={{ textAlign: 'left'}}
                    icon={ <SettingOutlined />}
                    type="text"
                    block
                    onClick={() => setIsOpen(true)}
                >
                    Ajustes cuenta
                </Button>
            </div>
        </div>
    )

    if (isLoading) {
        return <Spin />;
    }

    if (error) {
        console.error("Erreur à la récupération de l'identité de l'utilisateur:", error);
        return <div>Erreur au chargement de l'utilisateur</div>;
    }

    return (
        <>
            <Popover
                placement="bottomRight"
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
                content={ content }
            >
                <CustomAvatar
                    name={ user?.name || 'Unknown' }
                    src={ MyAvatar }
                    style={{ cursor: 'pointer' }}
                />
            </Popover>
            { user && (
                <AccountSettings
                    opened={ isOpen }
                    setOpened={ setIsOpen }
                    userId={ user.id }
                />)
            }
        </>
    )
}

export default CurrentUser;