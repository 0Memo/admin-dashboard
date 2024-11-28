/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = ({ items }: any) => {
    return (
        <ThemedLayoutV2
            Header={Header}
            Title={( titleProps ) => <ThemedTitleV2 { ...titleProps } text="Refine" />}
        >
            { items }
        </ThemedLayoutV2>
    )
}

export default Layout