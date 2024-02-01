import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return null
    }
};

const EditTopic = async ({ params }) => {
    const { id } = params;
    const topic = await getTopicById(id);
    if (!topic) {
        console.error("Topic is undefined or empty.");
        return <div>Error loading topic data</div>;
    }

    const { title, description } = topic;

    return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
