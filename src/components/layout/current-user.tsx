import { Popover, /* Button */ Spin } from 'antd'
import React from 'react'
import CustomAvatar from '../custom-avatar';
import { useGetIdentity } from '@refinedev/core';
import type { User } from "../../generated/graphql/schema.types";

const CurrentUser = () => {
    const { data: user, isLoading, error } = useGetIdentity<User>();

    if (isLoading) {
        return <Spin />;
    }

    if (error) {
        console.error('Error fetching user identity:', error);
        return <div>Erreur au chargement de l'utilisateur</div>;
    }

    return (
        <>
            <Popover
                placement="bottomRight"
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar name={user?.name || 'Unknown'} />
            </Popover>
        </>
    )
}

export default CurrentUser;