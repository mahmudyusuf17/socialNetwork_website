const navigation = [
    { name: 'Videos', href: '#' },
    { name: 'People', href: '#' },
    { name: 'Documents', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Communities', href: '#' },
    { name: 'Favorites', href: '#' },
    { name: 'Channels', href: '#' },
]

export default function Navbar(){
    return(
        <div className="max-w-7xl mx-auto">
            <div className="hidden md:block md:ml-8 md:pr-4 md:space-x-8 border-y-2 border-slate-300 py-3">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                    </a>
                ))}
            </div>
        </div>
    )
}