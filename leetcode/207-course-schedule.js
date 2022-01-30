/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 const canFinish = function(numCourses, prerequisites) {
    const {indegree, dependencyMap} = buildDependencyMap(numCourses, prerequisites);
    const canTakeCourses = findCanTakeCourses(indegree);
    let canTakeCount = 0;
    
    while (canTakeCourses.length > 0) {
        const takeCourse = canTakeCourses.pop();
        const toCourses = dependencyMap[takeCourse];
        canTakeCount += 1;
        
        for (let toCourse of toCourses) {
            indegree[toCourse] -= 1;
            if (indegree[toCourse] === 0) {
                canTakeCourses.unshift(toCourse);
            }
        }
    }
    return canTakeCount === numCourses;
};

const buildDependencyMap = function(numCourses, prerequisites) {
    const indegree = Array(numCourses).fill(0);
    const dependencyMap = {};
    for (let index = 0; index < numCourses; index++) {
        dependencyMap[index] = [];
    }
    
    for (let prerequisite of prerequisites) {
        const fromCourse = prerequisite[1];
        const toCourse = prerequisite[0];
        dependencyMap[fromCourse].push(toCourse);
        indegree[toCourse] += 1;
    }
    return {indegree, dependencyMap};
}

const findCanTakeCourses = function(indegree) {
    const canTakeCourses = [];
    for (let index = 0; index < indegree.length; index++) {
        if (indegree[index] === 0) {
            canTakeCourses.push(index);
        }
    }
    return canTakeCourses;
}

