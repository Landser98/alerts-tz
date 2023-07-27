import axios from "axios";

const useAxios = () => {
  const data = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (url) => {
    loading.value = true;
    try {
      const response = await axios.get(url);
      data.value = response.data;
      error.value = null;
      console.log(response)
    } catch (err) {
      error.value = "Error fetching data.";
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
};

export default useAxios;
