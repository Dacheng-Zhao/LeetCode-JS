/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 const findOrder = function(numCourses, prerequisites) {
    const {indegree, dependencyMap} = buildDependencyMap(numCourses, prerequisites);
    const canTake = findCanTake(indegree);
    const resultOrder = [];
    let canTakeCount = 0;
    
    while (canTake.length > 0) {
        const currentTakenCourse = canTake.pop();
        resultOrder.push(currentTakenCourse);
        canTakeCount += 1;
        const dependentCourses = dependencyMap[currentTakenCourse];
        
        for (let dependentCourse of dependentCourses) {
            indegree[dependentCourse] -= 1;
            if (indegree[dependentCourse] === 0) {
                canTake.unshift(dependentCourse);
            }
        }
    }
    
    return canTakeCount === numCourses ? resultOrder : [];
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
        indegree[toCourse] += 1;
        dependencyMap[fromCourse].push(toCourse);
    }
    return {indegree, dependencyMap}
}

const findCanTake = function(indegree) {
    const canTake = [];
    for (let index = 0; index < indegree.length; index++) {
        if (indegree[index] === 0) {
            canTake.push(index);
        }
    }
    return canTake;
}
