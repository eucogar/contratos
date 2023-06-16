import Sidebar from "@/components/sidebar";

export default function ({ children }) {
    return (
        <main className="flex">
            <Sidebar />
            <section className="flex flex-grow justify-center items-center h-screen">
                {children}
            </section>
        </main>
    );
}
