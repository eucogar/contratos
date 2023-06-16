import Sidebar from "@/components/sidebar";

export default function ({children}){
    return(
        <main>
            <Sidebar />
            <section style={{margin: 'auto', width: 'auto'}}>
                {children}
            </section>
        </main>
    )
}
