class Queue:
    def __init__(self) -> None:
        self._enq: List[int] = []
        self._deq: List[int] = []

    def enqueue(self, x: int) -> None:
        self._enq.append(x)

    def dequeue(self) -> int:
        if not self._deq:
            while self._enq:
                self._deq.append(self._enq.pop())

        return self._deq.pop()
