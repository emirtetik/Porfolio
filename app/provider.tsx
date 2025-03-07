import { ThemeProvider } from 'next-themes'

interface ProviderProps {
    children: React.ReactNode;
    }

const Provider = ({ children }: ProviderProps) => {
    
    return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default Provider