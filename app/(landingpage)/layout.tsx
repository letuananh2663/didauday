import { Header } from "./header"
import { ClerkProvider } from "@clerk/nextjs";
type Props = {
    children: React.ReactNode;
};

const LandingPageLayout = ({ children }: Props) => {
    return (
        <ClerkProvider afterSignOutUrl="/" >
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center">
                    {children}
                </main>
            </div>
        </ClerkProvider>
    );
};

export default LandingPageLayout;