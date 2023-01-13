
export default function ProfileLists (list) {

    return (
        <div className="list__box" key={list.id}>
        <p className="list__name" key={list.id}>{list.list_name}</p>
        </div>
    )

}