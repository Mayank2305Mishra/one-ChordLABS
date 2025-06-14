'use client';

export default function RightSidebar() {
    return (
        <aside className="hidden pt-24 w-64 border-l bg-gradient-to-b dark:from-dark-100 from-light-900 dark:to-dark-100/50  backdrop-blur-3xl lg:block">
            <div className="p-4">
                <h2 className="mb-4 font-semibold">Recently Played</h2>
                <div className="space-y-4">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg bg-accent/50 p-3"
                        >
                            <div className="h-10 w-10 rounded-md bg-muted" />
                            <div>
                                <p className="text-sm font-medium">Playlist {i + 1}</p>
                                <p className="text-xs text-muted-foreground">10 songs</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}