export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            '/static/textures/environmentMaps/px.jpg',
            '/static/textures/environmentMaps/nx.jpg',
            '/static/textures/environmentMaps/py.jpg',
            '/static/textures/environmentMaps/ny.jpg',
            '/static/textures/environmentMaps/pz.jpg',
            '/static/textures/environmentMaps/nz.jpg'
        ]
    },

    {
        name: 'grassColorTexture',
        type: 'texture',
        path: '/static/textures/dirt/color.jpg'
    },

    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: '/static/textures/dirt/normal.jpg'
    },

    {
        name: 'foxModel',
        type: 'gltfModel',
        path: '/static/models/Fox/glTF/Fox.gltf'
    }
]