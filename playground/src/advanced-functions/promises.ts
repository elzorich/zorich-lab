type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function fetchPosts(userId: number): Promise<Post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch posts for user with id ${userId}: ${response.statusText}`,
    );
  }
  const data = (await response.json()) as Post[];
  return data;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch user with id ${id}: ${response.statusText}`,
    );
  }
  const data = (await response.json()) as User;
  return data;
}

fetchUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
  .finally(() => console.log("Request completed"));

fetchUser(0)
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
  .finally(() => console.log("Request completed"));

async function loadUser(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Request completed");
  }
}

async function loadSequential(userId: number): Promise<void> {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(userId);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Request completed");
  }
}

async function loadParallel(userId: number): Promise<void> {
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
  ]);
}

async function main() {
  const startSequential = performance.now();
  await loadSequential(1);
  console.log(
    "performance.now() - startSequential):",
    performance.now() - startSequential,
  );

  const startParallel = performance.now();
  await loadParallel(1);
  console.log(
    "performance.now() - startParallel):",
    performance.now() - startParallel,
  );
}

main();

async function loadAll() {
    const results = await Promise.allSettled([
        fetchUser(1),
        fetchUser(999),
        fetchPosts(1),
    ])

    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log('✅', result.value)
        } else {
            console.log('❌', result.reason.message)
        }
    })
}

loadAll();
