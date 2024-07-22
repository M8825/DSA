class Solution:
    """
    @param intervals: an array of meeting time intervals
    @return: if a person could attend all meetings
    """
    def can_attend_meetings(self, intervals: List[Interval]) -> bool:
        if not intervals:
            return True

        intervals.sort(key=lambda e: e.start)
        last_interval = intervals[0]
        for interval in intervals[1:]:
            if last_interval.end > interval.start:
                return False
            else:
                last_interval = interval

        return True
