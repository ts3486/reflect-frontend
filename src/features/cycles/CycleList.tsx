export function CycleList(activeCycle: any) {
    const list =[1, 2, 3];

    return (
        <div>
            {list.map((cycle, index) => (
                <div key={index}>cycle</div>
            ))}
        </div>
    );
            
 };