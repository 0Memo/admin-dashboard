import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    /**
     * A resource in Refine performs these action:
     * list -> get all records (Read)
     * show -> get a single record (Read)
     *  create -> create a record (Create)
     *  edit -> update a record (Update)
     *  delete -> delete a record (Delete)
     *  or clone
    */
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Tablero',
            icon: <DashboardOutlined />
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/edit/:id',
        meta: {
            label: 'Empresas',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            label: 'Tareas',
            icon: <ProjectOutlined />
        }
    },
]